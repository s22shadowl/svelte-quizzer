<script context="module" lang="ts">
	import 'virtual:windi.css';

	const defaultPage = '首頁';

	export const setTitle = (currentPage: string = defaultPage) => {
		return `Svelte Quizzer -${currentPage}`;
	};
</script>

<svelte:head>
	<title>{setTitle(defaultPage)}</title>
</svelte:head>

<div class="bg-gray-200 w-screen h-screen flex flex-col items-center">
	<div class="bg-white w-screen-lg h-screen">
		<nav class="bg-blue-500 flex justify-around p-1 items-center">
			<h1 class="text-2xl text-white">Svelte Quizzer</h1>
			<a href="/" class="text-blue-200 text-xl hover:text-white">回首頁</a>
			<a href="/create" class="text-blue-200 text-xl hover:text-white">設置題目</a>
			<a href="/import" class="text-blue-200 text-xl hover:text-white">匯入題目</a>
			<a href="/play" class="text-blue-200 text-xl hover:text-white">進行遊戲</a>
		</nav>
		<div class="p-5"><slot /></div>

		<footer
			class="absolute bottom-0 text-dark-50 bg-gray-300 p-1 w-screen-lg text-center left-1/2 transform -translate-x-1/2"
		>
			Create by <a href="https://github.com/s22shadowl" class="text-blue-900">@s22shadowl</a>
		</footer>
	</div>
</div>
