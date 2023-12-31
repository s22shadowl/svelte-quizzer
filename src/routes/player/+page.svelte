<script lang="ts">
	import { setTitle } from '../+layout.svelte';

	import { io } from 'socket.io-client';
	import { status, hasJoined } from './store';
	import { gameStatus, messageType } from '../../constants';
	const currentPage = '參加遊戲';

	// const socket = io('http://localhost:4040');
	const socket = io('https://svelte-quizzer-server.onrender.com');

	let userNickname = '';
	let playerAnswer = '';

	$: currentStatus = $status;
	$: hasJoinednow = $hasJoined;

	const handleHostMessage = (message: { status: gameStatus; content: any }) => {
		if (message.status && message.status !== currentStatus) {
			status.set(message.status);
		}
	};

	const handleInputAnswer = (e: Event) => {
		const { value } = e?.target as HTMLTextAreaElement;
		playerAnswer = value;
	};

	const handleInputName = (e: Event) => {
		const { value } = e?.target as HTMLInputElement;
		userNickname = value;
	};

	// 監聽來自 server 的 "playerMessage" 事件
	socket.on('playersMessage', (message) => {
		console.log('player get message', message);

		handleHostMessage(message);
	});

	const handleSendAnswer = () => {
		// 發送一個 "joinGame" 事件
		socket.emit('playerAnswer', {
			name: userNickname,
			answer: playerAnswer,
			type: messageType.answer
		});

		playerAnswer = '';
	};

	const joinGame = () => {
		// 發送一個 "joinGame" 事件
		socket.emit('joinGame', {
			name: userNickname,
			type: messageType.join
		});

		hasJoined.set(true);
	};
</script>

<svelte:head>
	<title>{setTitle(currentPage)}</title>
</svelte:head>

<!-- TODO: 手機版樣式 -->
<div class="flex flex-col items-center">
	{#if currentStatus === gameStatus.initial}
		<h1 class="text-xl p-4 m-4 mt-0 w-[300px] bg-blue-300 rounded text-center">{currentPage}</h1>
		{#if !hasJoinednow}
			<div class="flex-col text-center">
				<p class="text-2xl ml-4">請輸入玩家名稱</p>
				<input
					type="text"
					id="name"
					name="name"
					class="border-1 ml-4 mt-2 mb-4 text-2xl border-black"
					bind:value={userNickname}
					on:input={handleInputName}
				/>
				<div>
					<button on:click|once={joinGame} class="ml-4 border-1 p-2 text-2xl border-black"
						>確認</button
					>
				</div>
			</div>
		{:else}
			<div>請稍等</div>
		{/if}
	{:else if currentStatus === gameStatus.Questioning}
		<div class="flex-col text-center">
			<div class="text-2xl ml-4">輸入答案</div>
			<textarea
				id="answer"
				name="answer"
				class="border-1 text-2xl ml-4 mt-2 mb-2 border-black"
				bind:value={playerAnswer}
				on:input={handleInputAnswer}
			/>
		</div>
		<button class="border-1 text-2xl p-2 m-2 border-black" on:click={handleSendAnswer}>送出</button>

		<!-- TODO: 搶答按鈕 -->
		<!-- TODO: 選項 a b c d -->
	{:else if currentStatus === gameStatus.FinalResult}
		<div>遊戲結束</div>
	{:else}
		<div>尚未開放作答</div>
	{/if}
</div>
