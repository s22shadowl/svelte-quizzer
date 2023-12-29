<script>
	import { steps } from './constants';

	import { status } from './store';

	const onButtonClick = () => {
		status.set(steps.finished);
	};
</script>

<div on:click={onButtonClick}>editQuestions</div>
