import React from "react"
import { ReactComponent as TrainIcon } from "../../../../static/img/conf/train.svg"
import { ReactComponent as AroundIcon } from "../../../../static/img/conf/around.svg"
import { ReactComponent as ParkingIcon } from "../../../../static/img/conf/parking.svg"

const VenueConf = () => {
  return (
    <div id="location">
      <div className="w-full mx-auto">
        <div className="flex w-2/3 flex-col mx-auto px-4">
          <h1 className="text-4xl text-white font-bold mt-8 mb-6">
            Location &amp; Venue
          </h1>
          <div className="flex flex-wrap">
            <div className="p-4 sm:w-full">
              <div className="h-full bg-[#251C39]/75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                <div className="text-white text-xl">
                  <p className="max-w-prose mx-auto text-white">
                    GraphQLConf 2023 is hosted in the San Francisco Bay Area,
                    where GraphQL was first created, at the{" "}
                    <a
                      href="https://www.hyatt.com/en-US/hotel/california/hyatt-regency-san-francisco-airport/sfobu"
                      target="_blank"
                    >
                      Hyatt Regency SFO
                    </a>
                    . We're thrilled to bring the world-wide community together
                    here. There’s lots to explore in the Bay Area and the
                    weather is great.
                  </p>
                </div>
                <h2 className="sm:text-2xl text-xl font-medium text-white mb-2 mt-8">
                  Hotel Information
                </h2>
                <p className="leading-relaxed mb-3 text-gray-400">
                  Please note, rooms will most likely sell out in advance of the
                  room block close dates listed below. We encourage you to book
                  early to secure a room at the conference rate
                  <br />
                  Important: The Linux Foundation will never reach out to
                  attendees by phone to make hotel reservations for our
                  conferences. Please be advised that the most secure way to
                  book in our discounted room block is by using the direct
                  booking link provided below or by calling the hotel directly.
                  If you receive a phone call or email from someone claiming to
                  be with The Linux Foundation or the hotel and they attempt to
                  sell you a hotel room, please email us at{" "}
                  <a className="font-bold" href="housing@linuxfoundation.org">
                    housing@linuxfoundation.org.
                  </a>
                </p>
                <h2 className="sm:text-2xl text-xl font-medium text-white mb-2 mt-8">
                  Welcome to all
                </h2>
                <p className="leading-relaxed mb-3 text-gray-400">
                  GraphQLConf is welcome to all. Please read our{" "}
                  <a href="/conf/faq/#dni">diversity & inclusion</a> guide and{" "}
                  <a href="/conf/faq/#codeofconduct">code of conduct</a>. Your
                  health and safety is our top priority. We have considered a
                  range of both{" "}
                  <a href="/conf/faq/#onsite-resources">onsite resources</a> and{" "}
                  <a href="/conf/faq/#emergency-resources">
                    emergency resources
                  </a>{" "}
                  as well as a{" "}
                  <a href="/conf/faq/#health-and-safety">health &amp; safety</a>{" "}
                  policy.
                </p>
              </div>
            </div>
          </div>
          <div className="container px-5 mx-auto flex max-lg:flex-col w-full gap-14 pt-16 pb-24">
            {[
              {
                title: "Public Transportation",
                icon: TrainIcon,
                content: (
                  <div>
                    <a
                      href="https://samtrans.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SamTrans
                    </a>
                    <p>
                      Service from Burlingame to San Francisco is available for
                      $5 (adults) or $2.50 youth and seniors.{" "}
                      <a
                        href="https://samtrans.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </a>
                    </p>
                    <a href="https://bart.gov">
                      Bay Area Rapid Transit (BART):
                    </a>
                    <p>
                      Take the Hyatt Shuttle Bus to/from SFO International
                      Terminal to connect with BART. Approximate cost from the
                      station to downtown San Francisco is $8.65 one-way.
                    </p>
                  </div>
                ),
              },
              {
                title: "Airport Information",
                icon: AroundIcon,
                content: (
                  <div>
                    <a href="https://flysfo.com">
                      San Francisco International Airport (SFO)
                    </a>
                    <p>
                      Drive time from venue: 7 mins.
                      <br />
                      Distance from venue: 3.1 miles.
                    </p>
                    <a href="https://www.google.com/maps/dir/San+Francisco+International+Airport+(SFO),+San+Francisco,+CA/Hyatt+Regency+San+Francisco+Airport,+1333+Old+Bayshore+Hwy,+Burlingame,+CA+94010/@37.6056719,-122.3979086,14z/am=t/data=!4m14!4m13!1m5!1m1!1s0x808f778c55555555:0xa4f25c571acded3f!2m2!1d-122.3789554!2d37.6213129!1m5!1m1!1s0x808f762dd36adc25:0x66d848e8e05f3445!2m2!1d-122.3651261!2d37.5938725!3e0?shorturl=1">
                      Driving Directions from SFO to Venue
                    </a>
                  </div>
                ),
              },
              {
                title: "Parking",
                icon: ParkingIcon,
                content: (
                  <div>
                    <a>The Hyatt Regency SFO offers self-parking.</a>
                    <p className="font-bold">Self-Parking:</p>
                    <p>
                      0-1 hour: $12
                      <br />
                      1-6 hours: $22/hour
                      <br />
                      6+ hours or overnight: $40/night
                    </p>
                  </div>
                ),
              },
            ].map(o => (
              <div key={o.title} className="flex-1">
                <div className="h-full rounded-lg overflow-hidden relative [&_a]:text-violet-400 [&_a]:font-medium [&_p]:text-white [&_p]:text-lg [&_p]:mb-6 [&>div>a]:block [&>div>a]:mt-6 [&>div>a]:mb-3">
                  <o.icon className="fill-violet-400 h-16 w-auto" />
                  <h1 className="my-3 sm:text-2xl text-xl font-medium text-white">
                    {o.title}
                  </h1>
                  {o.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenueConf
