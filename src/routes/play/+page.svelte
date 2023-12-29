<script>
	import { setTitle } from '../+layout.svelte';
	import Icon from '$lib/QR_code_example.png';
	import { goto } from '$app/navigation';
	const currentPage = '進行遊戲';

	const players = ['玩家1', '玩家2', '玩家3'];
	const onButtonClick = () => {
		goto('/game');
	};

	const showPlayers = () => {
		if (players.length === 0) {
			return ['無'];
		}

		return players.map((player, index) => player + (index !== players.length - 1 ? '、' : ''));
	};
</script>

<svelte:head>
	<title>{setTitle(currentPage)}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-xl p-4 m-4 mt-0 w-full bg-blue-300 rounded text-center">{currentPage}</h1>
	<img class="max-w-sm" src={Icon} alt="An alt text" />
	<div class="mb-4">
		<p class="text-center">請掃描 QR Code 或輸入以下網址參加遊戲：</p>
		<p class="text-center">https://123.456/</p>
	</div>
	<div>
		<p class="text-center">目前玩家：{showPlayers().join('')}</p>
		<p class="text-center">確認玩家參加完畢後請點擊下方按鈕開始</p>
	</div>

	<button class="bg-blue-300 p-2 mt-4 w-100px" on:click={onButtonClick}>開始</button>
</div>
