<script lang="ts">
  import type { Version, VersionTarget } from '$lib/generated';
  import Card, { Content } from '@smui/card';
  import { limitCharacters, prettyBytes, prettyDate, prettyNumber, prettyTarget } from '$lib/utils/formatting';

  export let version!: Pick<Version, 'created_at' | 'sml_version' | 'size' | 'stability' | 'downloads' | 'hash'> & {
    targets?: Pick<VersionTarget, 'targetName' | 'size' | 'hash'>[];
  };

  $: hash_toggle = version.targets.map(() => false);
</script>

<Card>
  <Content>
    <div class="text-lg break-words">
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <span><strong>Created:</strong> {prettyDate(version.created_at)}</span><br />
      <span><strong>Downloads:</strong> {prettyNumber(version.downloads)}</span><br />
      <span><strong>SML Version:</strong> {version.sml_version}</span><br />
      <span><strong>Stability:</strong> {version.stability}</span><br />
      {#if version.targets.length != 0}
        {#each version.targets as target, i}
          <hr class="my-2 align-middle" />
          <span><strong>Target:</strong> {prettyTarget(target.targetName)}</span><br />
          <span><strong>Size:</strong> {prettyBytes(target.size)}</span><br />
          <span
            ><strong>Hash:</strong>
            {hash_toggle[i] ? target.hash : limitCharacters(target.hash, 7)}
            <button on:click={() => (hash_toggle[i] = !hash_toggle[i])}>show/hide</button>
          </span>
        {/each}
      {:else}
        <span><strong>Size:</strong> {prettyBytes(version.size)}</span><br />
        <span><strong>Hash:</strong> {limitCharacters(version.hash, 7)}</span>
      {/if}
    </div>
  </Content>
</Card>
