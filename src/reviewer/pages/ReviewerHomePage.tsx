
import Header from '../../shared/Header'
import ReviewerSidebar from '../components/ReviewerSidebar'
import ShowRequest from '../components/ShowRequest'
import ShowRequestDetails from '../components/ShowRequestDetails'

function ReviewerHomePage() {
    return (
        <section>
            <Header />
            {/* <ShowRequestDetails/> */}
            <main className="flex">
                <ReviewerSidebar />
                <ShowRequest/>
            </main>
      </section>
      
  )
}

export default ReviewerHomePage

