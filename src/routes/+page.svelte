<script lang="ts">
    import * as data from '../../data/resume';
	import GeneralInfo from '../components/GeneralInfo.svelte';
    import TechSkills from '../components/TechSkills.svelte';
	import type { ResumeData } from '../types/resumeTypes';

    let resumeData: ResumeData = data;
</script>

{#if resumeData.general}
    <GeneralInfo generalInfo={resumeData.general} />
{/if}
{#if resumeData.techSkills}
    <TechSkills skills={resumeData.techSkills} />
{/if}
