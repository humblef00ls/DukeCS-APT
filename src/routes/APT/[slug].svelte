<!-- 
Page for selected question. Editor is the same editor used in VS code, Monaco Editor.
Also uses components from lib. -->

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

		<div class="question">
			<h1>{data.name}</h1>
			<p class="descp">
				{#each data.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</p>
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
		background: var(--back);
		border-radius: 5px;
		color: var(--text);
		display: inline-block;
		font-size: 12px;
		font-weight: bold;
		margin-right: 10px;
		padding: 7px 10px;
		opacity: .4;
	
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

		opacity: 0.65;
		margin-top: 10px;
		margin-bottom: 15px;
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
        margin-top: 10px;
        margin-bottom: 10px;

    }
    
	li:nth-of-type(2n-1) pre{
		background: var(--section-f)
	}
	h2{
		margin-top: 10px;
	}
	h1{
		margin: 0px;
	}


 
</style>
