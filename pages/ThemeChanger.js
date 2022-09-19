import ThemeChanger from "../components/ThemeChanger"

export default function Home() {
  return (
    <div className="antialiased font-sans h-full w-full bg-th-background text-th-primary-dark">
      <ThemeChanger />

      <main>
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 bg-th-background">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-th-accent-medium sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-th-background-secondary p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-th-accent-medium">
                      <a href="#" className="hover:underline">
                        Article
                      </a>
                    </p>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold">
                        Boost your conversion rate
                      </p>
                      <p className="mt-3 text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto accusantium praesentium eius, ut atque fuga
                        culpa, similique sequi cum eos quis dolorum.
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <span className="sr-only">Roel Aufderehar</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        <a href="#" className="hover:underline">
                          Roel Aufderehar
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm">
                        <time dateTime="2020-03-16">Mar 16, 2020</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>6 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-th-background-secondary p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-th-accent-medium">
                      <a href="#" className="hover:underline">
                        Video
                      </a>
                    </p>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold">
                        How to use search engine optimization to drive sales
                      </p>
                      <p className="mt-3 text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit facilis asperiores porro quaerat doloribus,
                        eveniet dolore. Adipisci tempora aut inventore optio
                        animi., tempore temporibus quo laudantium.
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <span className="sr-only">Brenna Goyette</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        <a href="#" className="hover:underline">
                          Brenna Goyette
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm">
                        <time dateTime="2020-03-10">Mar 10, 2020</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>4 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-th-background-secondary p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-th-accent-medium">
                      <a href="#" className="hover:underline">
                        Case Study
                      </a>
                    </p>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold">
                        Improve your customer experience
                      </p>
                      <p className="mt-3 text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint harum rerum voluptatem quo recusandae magni placeat
                        saepe molestiae, sed excepturi cumque corporis
                        perferendis hic.
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <span className="sr-only">Daniela Metz</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        <a href="#" className="hover:underline">
                          Daniela Metz
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm">
                        <time dateTime="2020-02-12">Feb 12, 2020</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>11 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
