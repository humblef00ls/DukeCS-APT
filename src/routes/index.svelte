<script>
	import { apts } from '$store/apts.js';
</script>
<svelte:head>
<title>CompSci 101, Fall 2021 APTs</title>
</svelte:head>
<main>
	<h1>CompSci 101, Fall 2021 APTs</h1>
	<p>This is the webpage for grading and submitting your APTs.</p>
	<a href="/submissions" class="sub-link">Past Submissions</a>
    
	{#each apts as apt}
		<!-- content here -->
		<section>
			<div class="title">
				<h2>{apt.name}</h2>
				<p>{apt.info}</p>
			</div>
			<div class="apt-container">
				{#each apt.apts as aptp}
					<a href={`/APT/${aptp.name}`}>
						<div class="apt-item">
							<div
								class={`apt-status ${
									aptp.status == 'correct' ? 'correct' : aptp.status == 'wrong' ? 'wrong' : ''
								}`}
							/>
							<h3>{aptp.name}</h3>
							{#if aptp.description != ''}
								<p>{aptp.description}</p>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/each}
    <footer>
        Made by <a href="https://aparimeya.xyz">Aparimeya Taneja</a>
        </footer>
</main>


<style>
 footer{
   
    margin-top: 50px;
        width: 100%;
        text-align: center;
        opacity: 0.33;
        letter-spacing: 2px;
        color: var(--accent);
 }

	main {
		display: flex;
		flex-direction: column;
		padding: 8vw;
		padding-top: 25px;
        padding-bottom: 30px;
        overflow-y: auto;
        height: 100vh;
        width: 100vw;
	}
    main > p {
        margin-top: 20px;
    }
	section {
		padding: 40px;
		padding-top: 30px;
		background: var(--section);

		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		color: var(--text);
		border-radius: 25px;
		margin-top: 20px;
	}
	section .title {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: baseline;
	}
	.title p {
		font-size: 1.1rem;
	}
	.apt-item {
		background: var(--accent);
        color: var(--back);
		padding-left: 45px;
		padding-right: 25px;
		border-radius: 20px;
		margin-right: 20px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 50px;
		line-height: 50px;
		justify-content: center;
		margin-top: 20px;
		box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
		transition-duration: 230ms;
		position: relative;
		align-items: center;
	}
	.apt-item:hover {
		box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
		transform: scale(1.035);
	}
	.apt-container {
		display: flex;
		margin-top: 20px;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.apt-item p {
		margin-left: 30px;
		font-weight: 100;
		opacity: 0.5;
	}
	.apt-status {
		width: 20px;
		height: 20px;
		border-radius: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 15px;
		background: rgba(125, 125, 125, 0.4);
		top: 50%;
		transform: translateY(-50%);
	}
	.correct {
		background: var(--green)
	}
	.wrong {
		background: var(--red)
        
	}
	.sub-link {
		font-weight: 800;
		letter-spacing: 2px;
		background-color: var(--accent);
        color: var(--back);
		margin-top: 20px;
		padding: 10px;
		padding-left: 15px;
		padding-right: 15px;
		border-radius: 40px;
        transition-duration: 250ms;
        transition-timing-function: ease-out;
		width: fit-content;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
    .sub-link:hover{
   
   color: var(--text-inv);
}
	a {
		text-decoration: none;
		color: var(--text);
	}


</style>
