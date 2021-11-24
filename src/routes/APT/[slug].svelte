<script>
	import { page } from '$app/stores';
	import { data } from '$store/isSpecial.js';
	import Editor from '$lib/Editor.svelte';

    
    
  
</script>

<!-- {$page.params.slug} -->
<!-- {JSON.stringify(data)} -->


<main>
	<section class="info">
		<h1>{data.name}</h1>
		<p class="descp">{data.description}</p>
		<div class="question">
			<h2>Problem Statement</h2>
			<p class="prob">{data.problem}</p>
            </div>
            <div class="question">
			<h2>Constraints</h2>
            <ul>
			{#each data.constraints as constraint}
				<li class="constr">{constraint}</li>
			{/each}
        </ul>
        </div>
        <div class="question">
        <h2>Examples</h2>
        <ol>
        {#each data.examples as example}
        <li class="constr"><pre>{example}</pre></li>
    {/each}
    </ol>
		</div>
	</section>
	<section class="editor">
		<Editor initial={data.initial} />
	</section>
</main>

<style>
	main {
		display: flex;
		height: 100vh;
		width: 100vw;
		flex-direction: row;
		flex-wrap: nowrap;
	}
	.editor {
		width: 60%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
	.info {
		padding: 40px;
		padding-top: 25px;
		overflow-y: auto;
		height: 100vh;
		width: 40%;
	}

	.descp {
		margin-top: 10px;
		margin-bottom: 10px;
		opacity: 0.65;
	}
	.question {
		padding: 30px;
        
        padding-left: 40px;
        padding-right: 40px;
		background: var(--section);
		box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
		border-radius: 30px;
        margin-top: 20px;
        margin-bottom: 30px;
	}
    .prob,.constr{
        margin-top: 15px;
        margin-bottom: 15px;

    }
    pre{
        overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;

    }

    .question *{
        line-height: 33px;
    }
    h2{
        margin-top: 10px;
    }
</style>
