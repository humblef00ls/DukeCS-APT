<script>
	import { submitting } from '$store';
    import Testcase from '$lib/Testcase.svelte';
    import {result} from '$store/isSpecial';
    $:  num_correct = result.tests.filter(x=> x.pass ).length
    
</script>

<main class:up={$submitting}>
	<h2>Results</h2>
    <button on:click={()=>$submitting=false}>Close</button>
    <div class="bar">
        <span class={`progress ${num_correct == result.tests.length ? 'correct' : 'wrong'}`} style={`width:${Math.floor( (num_correct/result.tests.length)*100 )}%`}> </span>
        <span class={`total-correct ${num_correct == result.tests.length ? 'correct-t' : 'wrong-t'}`}>{num_correct}/{result.tests.length}</span>
    </div>
    <section>
        {#each result.tests as test}
            <Testcase {...test} />

        {/each}
    </section>
</main>

<style>
	.up {
		transform: translateY(-100%);
	}

    section{
        margin-top: 50px;
        background: rgba(0,0,0,0.05);
        border-radius: 25px;
        padding: 30px;
        height: calc(60vh);
        overflow-y: scroll;
    }
	main {
		position: fixed;
		z-index: 2;
		top: 100vh;
		left: calc(40vw + 15px);
		width: calc(60vw - 30px);
		height: 80vh;
		display: flex;
		transition: 350ms ease-out;
		padding: 40px;
		padding-top: 25px;
		border-radius: 35px  35px 0px 0px;
		background: var(--section);
		flex-direction: column;
		flex-wrap: nowrap;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	}
    h2{
        font-size: 2.4rem;
        letter-spacing: 3px;
    }
    button{
        position: absolute;
        top:30px;
        right: 40px;
    }
    .bar{
        width: 100%;
        height: 10px;
        border-radius: 20px;
        background-color: rgba(0,0,0,0.25);
        margin-top: 30px;
        position: relative;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .progress{
        min-width: 10px;
        height: 100%;
        border-radius: 20px;
        display: block;
        position: absolute;
        left: 0px;
        background: red;
    }
    .total-correct{
        margin-top: 20px;
        display: block;
        text-align: end;
    }
    .correct {
		background: var(--green);

	}
	.wrong {
		background: var(--red);

	}
    .correct-t {

        color: var(--green);
    }
    .wrong-t {

        color: var(--red);
    }
</style>
