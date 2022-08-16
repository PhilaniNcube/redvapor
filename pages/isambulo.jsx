import { Fragment } from 'react'

const swela = () => {
  return (
    <Fragment>
      <main className="flex items-center justify-center py-24">
        <video
          controls="true"
          autoPlay="false"
          src="/videos/trailer-3.mp4"
          className="aspect-video w-full object-cover"
        ></video>
      </main>
    </Fragment>
  )
}
export default swela
