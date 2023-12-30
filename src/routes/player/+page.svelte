<script lang="ts">
	import { setTitle } from '../+layout.svelte';

	import { io } from 'socket.io-client';
	import { status } from './store';
	import { gameStatus } from '../../constants';
	const currentPage = '參加遊戲';

	const socket = io('http://localhost:4040');

	let userNickname = '';

	$: currentStatus = $status;

	const handleHostMessage = (message: { status: gameStatus; content: any }) => {
		if (message.status !== currentStatus) {
			status.set(message.status);
		}
	};

	const handleInputName = (e: Event) => {
		const { value } = e?.target as HTMLInputElement;
		userNickname = value;
	};

	// 監聽來自 server 的 "playersMessage" 事件
	socket.on('playersMessage', (message) => {
		console.log('get message', message);

		handleHostMessage(message);
	});

	const joinGame = () => {
		// 發送一個 "joinGame" 事件
		socket.emit('joinGame', {
			name: userNickname
		});
	};
</script>

<svelte:head>
	<title>{setTitle(currentPage)}</title>
</svelte:head>

<!-- TODO: 手機版樣式 -->
<div class="flex flex-col items-center">
	{#if currentStatus === gameStatus.initial}
		<h1 class="text-xl p-4 m-4 mt-0 w-full bg-blue-300 rounded text-center">{currentPage}</h1>
		<div>
			<span>請輸入玩家名稱</span>
			<input
				type="text"
				id="name"
				name="name"
				class="border-1 ml-2 mr-2"
				bind:value={userNickname}
				on:input={handleInputName}
			/>
			<button on:click={joinGame} class="border-1 p-2 ml-2">確認</button>
		</div>
	{:else if currentStatus === gameStatus.Questioning}
		<div>輸入答案</div>
		<input type="text" id="answer" name="answer" class="border-1 ml-2 mr-2" />
		<button class="border-1 p-2 ml-2">送出</button>

		<!-- TODO: 搶答按鈕 -->
		<!-- TODO: 選項 a b c d -->
	{:else if currentStatus === gameStatus.FinalResult}
		<div>遊戲結束</div>
	{:else}
		<div>尚未開放作答</div>
	{/if}
</div>
