<script>
	import { steps } from './constants';
	import { status } from './store';

	const onButtonClick = () => {
		status.set(steps.setConfigs);
	};
</script>

<div on:click={onButtonClick}>Initial</div>
