import Algorithm from '@/components/algorithm'
import Blog from '@/components/blog'
import Project from '@/components/project'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section>who am i</section>
      <section>
        <Project />
      </section>
      <section>
        <Blog />
      </section>
      <section>
        <Algorithm />
      </section>
      <section>방명록</section>
    </div>
  )
}
