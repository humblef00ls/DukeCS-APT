<!-- Initialising the editor, as well as buttons. Returns loader while initializing -->


<script >

    import { onMount } from 'svelte';
    import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
    import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
    import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
    import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
    import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
    import {editor_val,submitting} from '$store'
    let divEl;
    let editor;
    let Monaco;
    let init = false;
    export let initial = []

    onMount(async () => {
        // @ts-ignore
        console.log(initial)
        self.MonacoEnvironment = {
            getWorker: function (_moduleId, label) {
                if (label === 'json') {
                    return new jsonWorker();
                }
                if (label === 'css' || label === 'scss' || label === 'less') {
                    return new cssWorker();
                }
                if (label === 'html' || label === 'handlebars' || label === 'razor') {
                    return new htmlWorker();
                }
                if (label === 'typescript' || label === 'javascript') {
                    return new tsWorker();
                }
                return new editorWorker();
            }
        };

        Monaco = await import('monaco-editor');
        editor = Monaco.editor.create(divEl, {
            value: initial.join('\n'),
            language: 'python',
            automaticLayout: true,
            minimap: {
                enabled: false
            },
            fontSize: 14,
            lineNumbers: 'on',
            acceptSuggestionOnCommitCharacter: true,
            theme: 'vs-dark',

        });
        editor.layout();
        init = true;

        return () => {
            editor.dispose();
        };
    });

    $:if(editor){console.log(editor.getValue())};
    function handleSubmit() {
        
        $editor_val = editor.getValue()
        console.log($editor_val)
        $submitting = true
        
    }
</script>


{#if !init}
 <div class="loader"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
 </div>
 {:else}
 <div class="buttons">
     <span>
    <button class="save" on:click={handleSubmit}> Submit</button>
    <button class="cancel">Debug</button>
</span>
<span>
    <button class="prev"> Previous</button>
    <button class="next"> Next</button>
</span>
</div>
{/if}
<div bind:this={divEl} class="h-screen"  style="height:calc(100vh - 75px)" id="coder"/>



<style>
    a{
        text-decoration: none;
        color: var(--text);
        background-color: var(--back);
        padding: 10px 15px; 
        border-radius: 54px;

    }
    .loader{
        height: 100vh;
        width: 60vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 0px;
        top: 0px;

    }
    svg{
        width: 75px;
        height: 75px;
        stroke: var(--accent);
        opacity: .5;
        animation-name: spin;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 

}
.buttons{

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    background: #1e1e1e;
    padding-left: 25px;
    padding-right: 25px;
    }
    button{

        margin-left: 10px;
       
    }


@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>