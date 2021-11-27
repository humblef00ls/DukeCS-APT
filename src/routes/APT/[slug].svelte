
<script>
	import { page } from '$app/stores';
	import { data } from '$store/isSpecial.js';
	import Editor from '$lib/Editor.svelte';
	import Submission from '$lib/Submission.svelte';
    import { submitting } from '$store';
    $submitting  = false
    
  
</script>

<!-- {$page.params.slug} -->
<!-- {JSON.stringify(data)} -->

<Submission />
<svelte:head>
<title>CompSci 101, Fall 2021 APT  {data.name} </title>
</svelte:head>

<main>
	<section class="info">
		<h1>{data.name}</h1>
		<p class="descp">
			{#each data.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</p>
		<div class="question">

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
	.tag{
		background: #f5f5f5;
		border-radius: 5px;
		color: #333;
		display: inline-block;
		font-size: 12px;
		font-weight: bold;
		margin-right: 10px;
		padding: 7px 10px;
	
	}
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
		margin-top: 15px;
		margin-bottom: 15px;
		opacity: 0.65;
	}
	.question {
		padding: 25px;
        
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
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: .9rem;
  font-weight: 500;

    }
	li:nth-of-type(2n-1) pre{
		background: var(--section-f)
	}
	h2{
		margin-top: 10px;
	}


 
</style>
