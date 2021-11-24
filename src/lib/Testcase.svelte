<script>
	export let id;
	export let pass;
	export let expected;
	export let got;
	export let input;
</script>

<div class="test" style={`background: var(${ pass ? '--green-l' : '--red-l'})`}>
	<h3>Test Case {id}</h3>
	<p>Expected: {expected}</p>
    <p>Got: {got}</p>
    <p>Input: {input}</p>
</div>

<style>
	.test {
		display: flex;
		padding: 20px;
		border-radius: 25px;
		flex-direction: column;
		flex-wrap: nowrap;
        margin-bottom: 20px;
        opacity: 0.7;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}
	h3 {
		font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 10px;
	}
</style>
