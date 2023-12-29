<script lang="ts">
	import { setTitle } from '../+layout.svelte';
	import { steps } from './constants';
	import Initial from './Initial.svelte';
	import SetConfigs from './SetConfigs.svelte';
	import EditQuestions from './EditQuestions.svelte';
	import Finished from './Finished.svelte';
	import { status } from './store';

	const currentPage = '設置題目';

	$: currentStatus = $status;
</script>

<svelte:head>
	<title>{setTitle(currentPage)}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-xl p-4 m-4 mt-0 w-full bg-blue-300 rounded text-center">{currentPage}</h1>
	{#if currentStatus === steps.initial}
		<Initial />
	{:else if currentStatus === steps.setConfigs}
		<SetConfigs />
	{:else if currentStatus === steps.editQuestions}
		<EditQuestions />
	{:else}
		<Finished />
	{/if}
</div>
