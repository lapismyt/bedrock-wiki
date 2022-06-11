import{_ as o,c as i,a as n,b as e,d as s,e as t,r,o as p}from"./404.md.024c4ae0.js";var l="/assets/images/visuals/math-based-animations/animation-1.gif";const q='{"title":"Math-based Animations","description":"","frontmatter":{"title":"Math-based Animations","tags":["intermediate"],"category":["General"]},"headers":[{"level":2,"title":"Writing Math-Animations","slug":"writing-math-animations"},{"level":3,"title":"By Hand","slug":"by-hand"},{"level":3,"title":"In Blockbench","slug":"in-blockbench"},{"level":2,"title":"Using Queries","slug":"using-queries"},{"level":3,"title":"Avoiding Animation Controllers","slug":"avoiding-animation-controllers"},{"level":2,"title":"Example","slug":"example"}],"relativePath":"visuals/math-based-animations.md"}',c={},u=e("p",null,[s("Math animations are a powerful alternative to keyframe animations. Generally speaking, "),e("code",null,"math-based animations"),s(" is the concept of using Molang expressions to animate entity geometry. All vanilla animations are math-based, here is an example:")],-1),d=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;leftarm&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rotation&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;((-0.2 + 1.5 * (math.abs(math.mod(query.modified_distance_moved, 13) - 6.5) - 3.25) / 3.25) * query.modified_move_speed) * 57.3 - variable.agent.armxrotationfactor&quot;</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token string">&quot;-variable.agent.armzrotation&quot;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>As you can see, math-based animations can be quite complicated and difficult to understand. Thus, they should be treated as a <em>specialized-alternative</em> to using key-frames - not a <em>total</em> replacement.</p><p>This is the cost of the smooth and ideal loop of the animation.</p><p><img src="`+l+'" alt=""></p><h2 id="writing-math-animations" tabindex="-1">Writing Math-Animations <a class="header-anchor" href="#writing-math-animations" aria-hidden="true">#</a></h2><h3 id="by-hand" tabindex="-1">By Hand <a class="header-anchor" href="#by-hand" aria-hidden="true">#</a></h3><p>To write such an animation by hand, simply create an animation file and substitute keyframes for singular arrays of values; strings values are accepted, and it is in a string that one may place a math expression. The Vanilla files can prove an invaluable reference for these types of animations, and it is <strong>strongly</strong> recommended you download and preview them!</p><p>As an important tip for those who wish to <em>visualise</em> their processes, the tool, <a href="https://jannisx11.github.io/molang-grapher/" target="_blank" rel="noopener noreferrer">Molang Grapher</a> from <a href="https://twitter.com/jannisx11" target="_blank" rel="noopener noreferrer">Jannis</a> may simulate expressions on a proper graph!</p><h3 id="in-blockbench" tabindex="-1">In Blockbench <a class="header-anchor" href="#in-blockbench" aria-hidden="true">#</a></h3><p>Blockbench allows - to a degree - for the creation and live-previewing of most math-based animations. To begin, first create a new keyframe at frame 0 in your timeline. You may then add and edit MoLang expressions in the keyframe panel on the left sidebar. Mixing keyframes and math is supported. <strong>Remember</strong>, you should always omit quotation marks around expressions; they are only required in raw JSON-editing!</p><p>Do mind that not all MoLang queries are supported in Blockbench in part due to missing game-context. If you wish to preview an animation that uses a context-specific query, you may add it to the Variable Placeholders section, just underneath the keyframe panel, to simulate a value. For example, adding <code>query.modified_distance_moved = time*8</code> simulates the <code>modified_distance_moved</code> query with a speed of 8 blocks per second.</p><h2 id="using-queries" tabindex="-1">Using Queries <a class="header-anchor" href="#using-queries" aria-hidden="true">#</a></h2><p>The largest and most useful of tools in our mathematical repertoire is the wide array of MoLang &quot;Queries&quot;. Queries can be used to add outside information into your math expression.</p><p>Common Queries include:</p><ul><li><code>query.modified_distance_moved</code></li><li><code>query.modified_move_speed</code></li><li><code>query.anim_time</code></li><li><code>query.life_time</code></li></ul><p>These are utilised in animations to draw things such as the attack-time or distance-moved from the game-world to provide a more dyanamic and synced flow.</p><h3 id="avoiding-animation-controllers" tabindex="-1">Avoiding Animation Controllers <a class="header-anchor" href="#avoiding-animation-controllers" aria-hidden="true">#</a></h3><p>By using queries, you can avoid the need to create animation controllers. If the entity&#39;s speed is directly related to the speed of the walk animation, then by default, an entity that isn&#39;t moving won&#39;t be animated.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>A specific application example of a Math-Based animation may be found below. The example utilises the MoLang Query, <code>&quot;query.modified_distance_moved&quot;</code>:</p>',20),m=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.12.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;animation.car.wheel_spin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;loop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;bones&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			
				<span class="token property">&quot;front_wheels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;query.modified_distance_moved * -30&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				
				<span class="token property">&quot;back_wheels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;query.modified_distance_moved * -30&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
				
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>In this example, the model&#39;s bones, <code>front_wheels</code> and <code>back_wheels</code>, are rotated on the X-axis based on information passed from <code>query.modified_distance_moved</code>, then multiplied by -30.</p><p>This means that a car at <em>rest</em> <strong>will not</strong> spin, and a car that is <em>driving</em> <strong>will spin</strong> - doing so at a rate proportional to the car&#39;s movement speed.</p>`,3);function h(b,k,g,f,_,y){const a=r("CodeHeader");return p(),i("div",null,[u,n(a),d,n(a),m])}var w=o(c,[["render",h]]);export{q as __pageData,w as default};