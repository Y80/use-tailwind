import { faker } from '@faker-js/faker'
import { Icon } from '@iconify/react'
import avatar from '../assets/avatar.png'

export default function BlogHome() {
  return (
    <div className="bg-zinc-800 h-screen pt-32 text-white">
      <main className="mx-auto w-[800px] flex">
        <aside className="w-[160px] flex flex-col gap-8 shrink-0">
          <div className="flex items-center">
            <img src={avatar} className="w-16 rounded-full border-gray-600 border-2" />
            <h1 className="grow text-center text-4xl font-bold">令川</h1>
          </div>
          <div className="flex justify-between text-slate-200">
            <span className="flex items-center gap-2">
              <Icon icon="octicon:location-16" />
              杭州
            </span>
            <span className="flex items-center gap-2">
              <Icon icon="ps:work-case" />
              前端开发
            </span>
          </div>
          <div className="flex justify-between text-2xl text-slate-200">
            <Icon icon="iconamoon:email-fill" />
            <Icon icon="bxl:github" />
            <Icon icon="bxl:tiktok" />
            <Icon icon="codicon:twitter" />
          </div>
          <div className="text-xs text-slate-300 leading-5">
            React · Vue · Tailwind CSS · Tauri · Rust · Raycast · VS Code · Figma · Fig · JSBox · Proxyman · Cloudflare
          </div>
          <footer className="text-xs text-slate-400">
            <div>Copyright © 2023 lccl.cc</div>
            <div className="mt-2">京ICP备123000111号-5</div>
          </footer>
        </aside>

        <div className="ml-24 flex flex-col gap-4">
          {[
            { year: 2023, postCount: 4 },
            { year: 2022, postCount: 6 },
            { year: 2021, postCount: 3 },
          ].map(({ year, postCount }) => {
            return (
              <div key={year}>
                <h3 className="text-xl font-bold text-slate-200">{year}</h3>
                {Array.from({ length: postCount }).map(() => {
                  return (
                    <div className="mt-4 flex items-center gap-4">
                      <span className="text-slate-400 flex-shrink-0 text-sm" style={{ fontFamily: 'Fira Code' }}>
                        {faker.date.month({ abbreviated: true })}{' '}
                        {('0' + faker.number.int({ min: 1, max: 31 })).slice(-2)}
                      </span>
                      <span className="text-slate-300 font-bold text-lg line-clamp-1">{faker.lorem.sentence()}</span>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
