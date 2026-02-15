import { Gallery } from '../components/Gallery';
import { VideoReviews } from '../components/VideoReviews';
import { Testimonials } from '../components/Testimonials';

export function GalleryPage() {
  return (
    <div>
      <Gallery />
      <VideoReviews />
      <Testimonials />
    </div>
  );
}