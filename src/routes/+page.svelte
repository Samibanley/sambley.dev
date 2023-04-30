<script lang="ts">
    import * as data from '../../data/resume';
    import TechSkills from '../components/TechSkills.svelte';
	import type { ResumeData } from '../types/resumeTypes';

    let resumeData: ResumeData = data;
</script>

<h1>Welcome to my resume!</h1>
{#if resumeData.techSkills}
    <TechSkills skills={resumeData.techSkills} />
{/if}
