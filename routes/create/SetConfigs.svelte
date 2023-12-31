<script>
	import { steps } from '../../constants';

	import { status } from './store';

	const onButtonClick = () => {
		status.set(steps.editQuestions);
	};
</script>

<div on:click={onButtonClick}>setConfigs</div>
