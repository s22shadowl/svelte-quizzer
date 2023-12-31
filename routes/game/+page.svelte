<script>
	import { setTitle } from '../+layout.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	const currentPage = '遊戲內容';

	let hasQuestions = true;
	let hasPlayers = true;

	onMount(() => {
		if (!hasPlayers || !hasQuestions) {
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>{setTitle(currentPage)}</title>
</svelte:head>

<h1>{currentPage}</h1>

<!-- TODO: 選擇題組 UI -->
<!-- TODO: 答題、顯示答案、計分 UI -->
<!-- TODO: 遊戲結果 UI -->
