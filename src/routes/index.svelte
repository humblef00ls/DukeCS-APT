<script>
	import { apts } from '$store/apts.js';
	import { page } from '$app/stores';
	import { lightMode } from '$store';
	import Submissions from '$lib/Submissions.svelte';
	import {setColors} from '$lib/utils'
	let previous = false;

	const toggleLight = () =>{
		$lightMode = !$lightMode;
		setColors($lightMode);
		
	}
</script>

<svelte:head>
	<title>CompSci 101, Fall 2021 APTs</title>
</svelte:head>
<main>
	<header>
		<h1>CompSci 101, Fall 2021 APTs</h1>
		<div class="btns">
			<button on:click={toggleLight}>
				{#if $lightMode}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="ico moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
				>
				{:else}

				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"class="ico sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
				{/if}

			</button>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="ico help"
					><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line
						x1="12"
						y1="17"
						x2="12.01"
						y2="17"
					/></svg
				>
			</button>
		</div>
	</header>

	{#if previous}
		<p>Previous Submissions</p>
	{:else}
		<p>This is the webpage for grading and submitting your APTs.</p>
	{/if}
	<div class="btnsx">
	<button on:click={() => (previous = !previous)} class="sub-link">
		{#if previous}
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				class="arrow"
				clip-rule="evenodd"
				><path
					d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
				/></svg
			>
			APTs
		{:else}
			Past Submissions
		{/if}
	</button>
	<!-- {#if !previous}
	<button on:click={() => (previous = !previous)} class="sub-link"> 
			Group By
	</button>

	{/if} -->
</div>	

	{#if previous}
		<Submissions />
	{:else}
		<!-- else content here -->

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
								{#if aptp.tags.length > 0}
									<div class="tags">
										{#each aptp.tags.includes('Required') ? [ ...aptp.tags.filter( x => x != 'Required') , 'Required' ]: aptp.tags as tag}
											<span>
												{#if tag=='Required'}

												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icox"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
												{:else}
												{tag}
												{/if}
											
											</span>
										{/each}
									</div>
		
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
	{/if}
</main>

<style>
	.icox{
		stroke: none;
		fill: var(--accent);
		transform: scale(.8);
	}
	.arrow {
		transform: rotate(180deg) translateX(260%);
		fill: var(--back);
		stroke: var(--back);
		position: absolute;
		left: 50%;
		transition-duration: 200ms;
		transition-timing-function: ease-out;
	}
	.sub-link:hover .arrow {
		transform: rotate(180deg) translateX(280%);
		fill: var(--text-inv);
		stroke: var(--text-inv);
	}
	footer {
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

		box-shadow: rgba(98, 103, 109, 0.2) 0px 8px 24px;
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
		padding-left: 55px;
		padding-right: 25px;
		border-radius: 20px;
		margin-right: 20px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 60px;
		line-height: 60px;
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

	.apt-item .tags {
		margin-left: 10px;
		font-weight: 100;
		
	}
	.tags{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		opacity: 0.95;
	}
	.tags span {
		margin-left: 15px;
		margin-right: -5px;

		font-size: 0.8rem;
		font-weight: 100;
		background-color: var(--back);
		color: var(--accent);
		height: 34px;
		line-height: 30px;
		padding-left: 15px;
		padding-right: 15px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;

	}
	.apt-status {
		width: 20px;
		height: 20px;
		border-radius: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 20px;
		background: var(--section);
				top: 50%;
		transform: translateY(-50%);
	}
	.correct {
		background: var(--green);
	}
	.wrong {
		background: var(--red);
	}
	.sub-link {
		font-weight: 800;
		letter-spacing: 2px;
		background-color: var(--accent);
		color: var(--back);
		margin-top: 20px;
		padding: 10px;
		min-width: 200px;
		border-radius: 40px;
		transition-duration: 250ms;
		transition-timing-function: ease-out;
		width: fit-content;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.sub-link:hover {
		color: var(--text-inv);
	}
	a {
		text-decoration: none;
		color: var(--text);
	}
	header {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}
	.btns,.btnsx {
		transform: translateY(4px);
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
	}
	.btnsx {
		margin-bottom: 10px;
	}
	.btnsx button{
		margin-right: 20px;
	}
	.btns button {
		min-width: unset;
		padding-left: 20px;
		padding-right: 20px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		margin-left: 15px;
	}

	.ico {
		stroke: var(--back);
		fill: none;
		transition-duration: 200ms;
		transition-timing-function: ease-out;
	}
	.btns button:hover .ico{
		stroke: var(--text-inv);
	}
</style>
