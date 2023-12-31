<script lang="ts">
	import { setTitle } from '../+layout.svelte';
	// import Icon from '$lib/QR_code_example.png';
	import { goto } from '$app/navigation';
	import { io } from 'socket.io-client';
	import { playersData } from '../game/store';
	import { gameStatus, messageType } from '../../constants';
	const currentPage = '進行遊戲';

	$: currentPlayers = $playersData.map((player) => player.id);

	const handleHostMessage = (message: { name: string; context?: string; type: messageType }) => {
		if (message.type === messageType.join) {
			playersData.update((currentP) => [
				...currentP,
				{ id: message.name, score: 0, currentAnswer: '預設' }
			]);
		}
	};

	// const socket = io('http://localhost:4040');
	const socket = io('https://svelte-quizzer-server.onrender.com');

	// 監聽來自 server 的 "hostMessage" 事件
	socket.on('hostMessage', (message) => {
		console.log('get message', message);

		handleHostMessage(message);
	});

	const onButtonClick = () => {
		socket.emit('gameStart', {
			// TODO: 修正狀態
			status: gameStatus.Questioning
		});
		goto('/game');
	};
</script>

<svelte:head>
	<title>{setTitle(currentPage)}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-xl p-4 m-4 mt-0 w-full bg-blue-300 rounded text-center">{currentPage}</h1>
	<!-- <img class="max-w-sm" src={Icon} alt="An alt text" /> -->
	<div class="mb-4">
		<!-- <p class="text-center">請掃描 QR Code 或輸入以下網址參加遊戲：</p> -->
		<p class="text-center">請輸入以下網址參加遊戲：</p>
		<p class="text-center">https://svelte-quizzer.vercel.app/player/</p>
	</div>
	<div>
		<p class="text-center text-2xl">目前玩家：{currentPlayers.join('、')}</p>
		<p class="text-center">確認玩家參加完畢後請點擊下方按鈕開始</p>
	</div>

	<button class="bg-blue-300 p-2 mt-4 w-100px" on:click={onButtonClick}>開始</button>
</div>
