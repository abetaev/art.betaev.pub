import { For, createSignal, type JSXElement, Show } from 'solid-js'
import ab_f from './img/abyssolution-f.png'
import ab_t from './img/abyssolution-t.png'
import bc_e from './img/breadcrab-e.png'
import rd_e from './img/rdog-e.png'
import lv_f from './img/адиновощество-f.png'
import lv_t from './img/адиновощество-t.png'
import bp_f from './img/бородокс-f.png'
import bp_t from './img/бородокс-t.png'
import op_f from './img/о!пасть!насть!-f.png'
import op_t from './img/о!пасть!насть!-t.png'


type ImgData = {
  title: string
  description?: () => JSXElement
  thumb: string
  image: string
  wip?: boolean
}
let data: ImgData[] = [
  {
    title: "abyssolution",
    thumb: ab_t,
    image: ab_f,
    wip: true,
    description: () => (
      <p>one world that i have drafted; it's not yet complete</p>
    )
  },
  {
    title: "о!пасть!насть!",
    thumb: op_t,
    image: op_f,
    description: () => (
      <>
        <p>autistic perception passed through prism of my explanation.</p>
        <p>sometimes it's funny, sometimes not. othertimes it's both.</p>
      </>
    )
  },
  {
    title: "бородокс",
    thumb: bp_t,
    image: bp_f,
    description: () => (
      <p>from colorless to colorful, from sunshine until dawn</p>
    )
  },
  {
    title: "адиновощество",
    thumb: lv_t,
    image: lv_f,
    description: () => (
      <p>
        russian words "hell" ("ад"), "loneliness" ("одиночество") and "vegetable" ("овощ") melt into this picture.
      </p>
    )
  }
]

const [getImg, setImg] = createSignal<ImgData>();

type ImgProps = { data: ImgData }
const Img = ({ data }: ImgProps) => (
  <article>
    <header>
      <h1>{data.title}</h1>
    </header>
    <main>
      <img src={data.thumb} class="thumbnail" onClick={() => setImg(data)} />
      <div>
        {data.description && data.description()}
      </div>
    </main>
  </article>
)

type CreateIssueButtonProps = { icon: string, title: string, body: string }
const CreateIssueButton = (props: CreateIssueButtonProps) => (
  <a role="button"
    href={`https://github.com/abetaev/art.betaev.pub/issues/new?title=${encodeURIComponent(props.title)}&body=${encodeURIComponent(props.body)}`}
    class="material-symbols-outlined outline">{props.icon}</a>
)

type ViewProperties = { img: ImgData }
const View = ({ img }: ViewProperties) => (
  <article style={{ width: "100%" }}>
    <header>
      <h1>{img.title}</h1>
    </header>
    <img src={img.image} onClick={() => window.location.assign(img.image)} />
    <footer>
      <nav>
        <ul>
          <li>
            <CreateIssueButton
              icon="thumb_down"
              title={`i {hate|despise|loathe|don't feel anything about|???} "${img.title}"`}
              body="because it is [not an art, [disgusting, ugly, full of shit, boring, ...]]"
            />
          </li>
          <li>
            <CreateIssueButton
              icon="psychology_alt"
              title={`i don't have an opinion about "${img.title}"`}
              body="because i am [psychopath, not feeling like it today, bored, too smart, dumb, ...]]"
            />
          </li>
          <li>
            <CreateIssueButton
              icon="thumb_up"
              title={`i {like|absolutely love|see something in|???} "${img.title}"`}
              body="because it is [beautiful, inspirational, deep, ...]"
            />
          </li>
        </ul>
        <ul>
          <li><button class="material-symbols-outlined outline" onClick={() => setImg()}>close</button></li>
        </ul>
      </nav>
    </footer>
  </article>
)

export default () => (
  <>
    <div class="container">
      <header style={{ display: "flex", "flex-direction": "row", "align-items": "center" }}>
        <aside>
          <img src={bc_e} />
        </aside>
        <blockquote>
          <p>hi! my name is breadCrab! it's like camelCase, but <i>bread</i> instead of <i>camel</i> and <i>Crab</i> instead of <i>Case</i>! it's easier to remember this way!</p>
          <p>let me introduce <s>you to</s> <i>to you</i> these products of one's mind and creativity:</p>
        </blockquote>
      </header>
      <For each={data}>
        {img => <Img data={img} />}
      </For>
      <footer style={{ display: "flex", "flex-direction": "row", "align-items": "center", "justify-content": "flex-end" }}>
        <blockquote style={{ "border-right": ".25rem solid var(--blockquote-border-color)", "border-left": "none" }}>
          <p>tell me what you think or i'll bite you!</p>
          <p style={{ display: "flex" }}>
            <CreateIssueButton
              icon="thumb_down"
              title="i {hate|despise|loathe|don't feel anything about|???} this"
              body="because it is [not an art, [disgusting, ugly, full of shit, boring, ...]]"
            />
            <CreateIssueButton
              icon="psychology_alt"
              title="i don't have an opinion about this"
              body="because i am [psychopath, not feeling like it today, bored, too smart, dumb, ...]]"
            />
            <CreateIssueButton
              icon="thumb_up"
              title="i {like|absolutely love|see something in|???} this"
              body="because it is [beautiful, inspirational, deep, ...]"
            />
          </p>
        </blockquote>
        <aside>
          <img src={rd_e} />
        </aside>
      </footer>
    </div>
    <Show when={getImg()}>
      <dialog open style={{ width: "100%" }}>
        <View img={getImg() as ImgData} />
      </dialog>
    </Show>
  </>
)