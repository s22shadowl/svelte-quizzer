<script lang="ts">
	import { setTitle } from '../+layout.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { localQuestions } from '$lib/localQuestions';
	import { messageType, questionType } from '../../constants';
	import { playersData, answeringStatus, currentGroupIndex, currentQuestionIndex } from './store';
	import { io } from 'socket.io-client';
	const currentPage = '遊戲內容';

	let hasQuestions = true;
	let hasPlayers = true;
	$: currentPlayers = $playersData;
	$: groupIndex = $currentGroupIndex;
	$: questionIndex = $currentQuestionIndex;
	$: currentGroupLength = localQuestions.groups[groupIndex].questions.length;
	$: currentQuestion = localQuestions.groups[groupIndex].questions[questionIndex];
	$: isAnswering = $answeringStatus;

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

	const handleButtonClick = (playerId: string, score: number) => {
		playersData.update((players) =>
			players.map((player) => {
				if (player.id === playerId) {
					player.score += score;
					player.currentAnswer = '';
				}
				return player;
			})
		);
	};

	const handleNextQuestion = () => {
		if (!isAnswering) {
			if (questionIndex === currentGroupLength - 1) {
				currentQuestionIndex.set(0);
				currentGroupIndex.update((cur) => cur + 1);
			} else {
				currentQuestionIndex.update((cur) => cur + 1);
			}

			// 清空答案
			playersData.update((players) =>
				players.map((player) => {
					player.currentAnswer = '';

					return player;
				})
			);
		}
		answeringStatus.update((cur) => !cur);
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
		當前題型：{localQuestions.groups[groupIndex].title}（{questionIndex + 1}/{currentGroupLength}）
	</h1>

	{#if isAnswering}
		<div class="text-xl p-4 m-4 mt-0 w-full bg-blue-300 rounded text-center">
			{localQuestions.groups[groupIndex].questions[questionIndex].id + 1}.{localQuestions.groups[
				groupIndex
			].questions[questionIndex].title}
		</div>

		<div class="flex w-full">
			<div class="text-xl p-4 mr-4 md-4 mt-0 w-[70%] bg-blue-300 rounded text-left leading-loose">
				{#if currentQuestion.type === questionType.select}
					<p>A.{currentQuestion.options?.[0]}</p>
					<p>B.{currentQuestion.options?.[1]}</p>
					<p>C.{currentQuestion.options?.[2]}</p>
					<p>D.{currentQuestion.options?.[3]}</p>
				{/if}
				{#if !!currentQuestion.image_url && currentQuestion.image_url !== ''}
					<img class="m-4 max-w-[90%] max-h-[50vh]" src={currentQuestion.image_url} alt="圖片" />
				{/if}
				{#if !!currentQuestion.video_url && currentQuestion.video_url !== ''}
					<iframe class="m-4" src={currentQuestion.video_url} title="影片" />
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
	{:else}
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
							on:click={() => handleButtonClick(player.id, 2)}>O</button
						>
						<button
							class="w-[50px] p-2 bg-blue-200 text-2xl font-bold"
							on:click={() => handleButtonClick(player.id, 0)}>X</button
						>
						<button
							class="w-[50px] p-2 bg-blue-200 text-2xl font-bold"
							on:click={() => handleButtonClick(player.id, 1)}>△</button
						>
					{/if}
				</div>
			{/each}
		</div>
		<button class="text-3xl p-4 m-4 bg-blue-300 rounded text-center" on:click={handleNextQuestion}
			>下一題</button
		>
	{/if}
</div>
<!-- TODO: 選擇題組 UI -->
<!-- TODO: 答題、顯示答案、計分 UI -->
<!-- TODO: 遊戲結果 UI -->
