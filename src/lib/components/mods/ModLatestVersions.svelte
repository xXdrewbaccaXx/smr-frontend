<script lang="ts">
  import type { Version, VersionTarget } from '$lib/generated';
  import { API_REST } from '$lib/core';
  import { base } from '$app/paths';
  import Card, { Content } from '@smui/card';
  import { Icon } from '@smui/common';
  import { prettyBytes, prettyDate, prettyTarget } from '$lib/utils/formatting';
  import { installMod } from '$lib/stores/launcher';

  type IVersion = Pick<Version, 'id' | 'link' | 'version' | 'created_at'> & {
    targets?: Pick<VersionTarget, 'targetName' | 'size' | 'hash'>[];
  };

  type ILatestVersions = {
    alpha?: IVersion;
    beta?: IVersion;
    release?: IVersion;
  };

  const stabilities = {
    release: 'new_releases',
    beta: 'warning',
    alpha: 'report'
  };

  export let latestVersions!: ILatestVersions;
  export let modId!: string;
</script>

<Card>
  <Content>
    <div class="grid grid-flow-row gap-y-2">
      <h3 class="text-2xl my-4 font-bold">Latest Versions</h3>

      {#each Object.keys(stabilities) as stability}
        {#if latestVersions[stability]}
          <div class="version">
            <div class="text-4xl w-14 h-14 p-2.5" title={`Latest ${stability} release`}>
              <Icon class="material-icons">{stabilities[stability]}</Icon>
            </div>
            <div class="grid grid-flow-row">
              <a href="{base}/mod/{modId}/version/{latestVersions[stability].id}/" class="text-yellow-500 underline"
                >Version {latestVersions[stability].version} ({stability})</a>
              <div>{prettyDate(latestVersions[stability].created_at)}</div>
            </div>
            <!-- <div class="text-3xl w-14 h-14 p-2.5"> -->
            {#if latestVersions[stability].targets.length != 0}
              <div class="text-lg break-words">
                {#each latestVersions[stability].targets as target}
                  <div>
                    <a
                      href={API_REST +
                        '/mod/' +
                        modId +
                        '/versions/' +
                        latestVersions[stability].id +
                        '/target/' +
                        target.targetName +
                        '/download'}
                      class="text-yellow-500 underline"
                      ><Icon class="material-icons" style="height:5px;">download</Icon></a>
                    {prettyTarget(target.targetName)} - {prettyBytes(target.size)}
                  </div>
                {/each}
              </div>
            {:else}
              <a
                href="#top"
                on:click={() => installMod(modId)}
                title="Install via Satisfactory Mod Manager"
                class="text-yellow-500 underline">
                <Icon class="material-icons">download</Icon>
              </a>
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  </Content>
</Card>

<style lang="postcss">
  .version {
    @apply grid grid-flow-col text-lg gap-x-4;
    grid-template-columns: max-content auto max-content;
  }
</style>
