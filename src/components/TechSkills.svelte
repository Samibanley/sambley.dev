<script lang="ts">
    import List, { Item, Text } from '@smui/list';

    export let skills: string[] = [''];
</script>


<List>
    {#each skills as skill}
        <Item>
            <Text>{skill}</Text>
        </Item>
    {/each}
</List>