<script>
	import { setTitle } from '../+layout.svelte';
	const currentPage = '匯入題目';

	//TODO: import 功能
</script>

<svelte:head>
	<title>{setTitle(currentPage)}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-xl p-4 m-4 mt-0 w-full bg-blue-300 rounded text-center">{currentPage}</h1>
</div>
