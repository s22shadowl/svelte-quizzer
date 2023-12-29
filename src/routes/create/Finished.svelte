<script>
	import { steps } from './constants';

	import { status } from './store';

	const onButtonClick = () => {
		status.set(steps.initial);
	};
</script>

<div on:click={onButtonClick}>finished</div>
