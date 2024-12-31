<script lang="ts">
	import { setTitle } from '../../+layout.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { localQuestions } from '$lib/localQuestions2024';
	import { messageType, Mode2AnsweringStatus, questionType } from '../../../constants';
	import { playersData, answeringStatus2, currentQuestionIndex, currentPlayerIndex,finishedQuestionIDs } from '../store';
	import { io } from 'socket.io-client';
	const currentPage = '遊戲內容';

	let hasQuestions = true;
	let hasPlayers = true;
	$: currentPlayers = $playersData;
	$: playerIndex = $currentPlayerIndex;
	$: currentPlayer = $playersData[playerIndex];
	$: questionIndex = $currentQuestionIndex;
	$: currentQuestion = localQuestions[questionIndex].data;
	$: answeringStatus = $answeringStatus2;
	$: finishedQuestions = $finishedQuestionIDs

	// const socket = io('http://localhost:4040');
	const socket = io('https://svelte-quizzer-server.onrender.com');

	const handlePlayerMessage = (message: { name: string; type: messageType; answer?: string }) => {
		if (message.type === messageType.answer) {
			playersData.update((players) =>
				players.map((player) => {
					if (player.id === message.name && message.answer) {
						player.currentAnswer = message.answer;
					}
					return player;
				})
			);
		}
	};

	const handleSelectQuestion = (id: number) => {
		console.log(id, answeringStatus)
		currentQuestionIndex.set(id);
		answeringStatus2.set(Mode2AnsweringStatus.showQuestion);
	};

	const handleButtonClick = (playerId: string, playerIndex: number, score: number) => {
		playersData.update((players) =>
			players.map((player) => {
				if (player.id === currentPlayer.id && player.index === currentPlayer.index) {
					score = score *2;
				}
				if (player.id === playerId && player.index === playerIndex) {
					player.score += score;
					player.currentAnswer = '';
				}
				return player;
			})
		);
	};

	const handleNextQuestion = () => {
		if (!answeringStatus) {
			// 清空答案
			playersData.update((players) =>
				players.map((player) => {
					player.currentAnswer = '';

					return player;
				})
			);
		}

		if (answeringStatus === Mode2AnsweringStatus.calculated) {
			// 將當前題目 index 加入 finishedQuestions
			finishedQuestionIDs.update((finished) => [...finished, $currentQuestionIndex]);
			answeringStatus2.set(Mode2AnsweringStatus.selectQuestion);
			// 更新下一位選題玩家
			currentPlayerIndex.update((index) => index !== currentPlayers.length - 1 ? index+1 : 0)

		} else if (answeringStatus === Mode2AnsweringStatus.showQuestion) {
			answeringStatus2.set(Mode2AnsweringStatus.calculated);
		}
	};

	// 監聽來自 server 的 "playerMessage" 事件
	socket.on('hostMessage', (message) => {
		console.log('host get message', message);

		handlePlayerMessage(message);
	});

	onMount(() => {
		if (!hasPlayers || !hasQuestions) {
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>{setTitle(currentPage)}</title>
</svelte:head>
<div class="flex flex-col items-center">
	<h1 class="text-2xl p-4 m-4 mt-0 w-full bg-blue-300 rounded text-center">
		{#if answeringStatus !== Mode2AnsweringStatus.selectQuestion}
		當前題目：{localQuestions[questionIndex].title}
		{:else}
		當前玩家：{currentPlayer?.id || ''}
		{/if}
	</h1>

	{#if answeringStatus === Mode2AnsweringStatus.showQuestion}
		<div class="text-xl p-4 m-4 mt-0 w-full bg-blue-300 rounded text-center">
			{localQuestions[questionIndex].data.description}
		</div>

		<div class="flex w-full">
			<div class="text-xl p-4 mr-4 md-4 mt-0 w-[70%] bg-blue-300 rounded text-left leading-loose">
				{#if !!currentQuestion.image_url && currentQuestion.image_url !== ''}
				<img class="m-4 max-w-[90%] max-h-[50vh]" src={currentQuestion.image_url} alt="圖片" />
				{/if}
				{#if !!currentQuestion.video_url && currentQuestion.video_url !== ''}
				<iframe class="m-4" src={currentQuestion.video_url} title="影片" />
			{/if}
				{#if currentQuestion.type === questionType.select}
					<p>A.{currentQuestion.options?.[0]}</p>
					<p>B.{currentQuestion.options?.[1]}</p>
					<p>C.{currentQuestion.options?.[2]}</p>
					<p>D.{currentQuestion.options?.[3]}</p>
					<p>D.{currentQuestion.options?.[4]}</p>
				{/if}

			</div>
			<div class="text-xl p-4 md-4 flex-grow bg-blue-300 rounded text-left leading-loose">
				<p class="text-center">當前分數：</p>
				{#each currentPlayers as player (player)}
					<p>{player.id}: {player.score}</p>
				{/each}
			</div>
		</div>

		<button class="text-3xl p-4 m-4 bg-blue-300 rounded text-center" on:click={handleNextQuestion}
			>計分</button
		>
	{:else if answeringStatus === Mode2AnsweringStatus.calculated}
		<div class="border border-solid border-black rounded w-full">
			<div class="flex font-bold border-b border-solid border-black">
				<p class="bg-blue-200 p-4 w-[150px] text-center">玩家</p>
				<p class="bg-blue-300 p-4 w-[100px] text-center">分數</p>
				<p class="bg-blue-200 p-4 flex-grow">答案</p>
			</div>
			{#each $playersData as player (player.id)}
				<div class="flex border-b border-solid border-black">
					<p class="bg-blue-200 p-4 text-xl w-[150px] text-center">{player.id}</p>
					<p class="p-4 bg-blue-300 text-xl w-[100px] text-center">{player.score}</p>
					<p class="bg-blue-200 flex-grow p-4">{player.currentAnswer}</p>
					{#if player.currentAnswer !== ''}
						<button
							class="w-[50px] p-2 bg-blue-200 text-2xl font-bold"
							on:click={() => handleButtonClick(player.id, player.index, 2)}>O</button
						>
						<button
							class="w-[50px] p-2 bg-blue-200 text-2xl font-bold"
							on:click={() => handleButtonClick(player.id,player.index, 0)}>X</button
						>
						<button
							class="w-[50px] p-2 bg-blue-200 text-2xl font-bold"
							on:click={() => handleButtonClick(player.id,player.index, 1)}>△</button
						>
					{/if}
				</div>
			{/each}
		</div>
		<button class="text-3xl p-4 m-4 bg-blue-300 rounded text-center" on:click={handleNextQuestion}
			>下一題</button
		>
		{:else}
		<div class="rounded w-full">
			<!-- 5x5 表格列出所有題目 -->
			<div class="grid grid-cols-5 gap-2 p-4">
				{#each localQuestions as question (question.id)}
					<button
						class="p-4 rounded text-center text-white"
						class:!bg-gray-600={finishedQuestions.includes(question.id)}
						class:!bg-blue-600={!finishedQuestions.includes(question.id)}
						class:cursor-not-allowed={finishedQuestions.includes(question.id)}
						class:cursor-pointer={!finishedQuestions.includes(question.id)}
						on:click={() => handleSelectQuestion(question.id)}
						disabled={finishedQuestions.includes(question.id)}
					>
						{question.title}
					</button>
				{/each}
			</div>
			<!-- 顯示當前分數 -->
			<div class="text-xl p-4 md-4 flex-grow bg-blue-300 rounded text-left leading-loose">
				<p class="text-center">當前分數：</p>
				{#each currentPlayers as player (player)}
					<p>{player.id}: {player.score}</p>
				{/each}
			</div>
		</div>
	{/if}

</div>

<!-- TODO: 選擇題組 UI -->
<!-- TODO: 答題、顯示答案、計分 UI -->
<!-- TODO: 遊戲結果 UI -->
