<script lang="ts">
	import { general } from '../../data/resume';
    import  type { GeneralInfo } from '../types/resumeTypes';

export let generalInfo: GeneralInfo;
</script>

<h1>{generalInfo.firstName} {generalInfo.lastName}</h1>
<h2>{generalInfo.title}</h2>
<p>{generalInfo.preferredName} is a {generalInfo.title} {generalInfo.summary}</p>
