
import { Outlet } from 'react-router'
import ReviewerSidebar from '../components/ReviewerSidebar'
import ReviewerHeader from '../components/ReviewerHeader'


function ReviewerHomePage() {
    return (
        <section>
            <ReviewerHeader />
            <main className="flex items-stretch max-sm:gap-12">
                <ReviewerSidebar />
                <Outlet/>
            </main>
      </section>
      
  )
}

export default ReviewerHomePage

