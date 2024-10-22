import Heading from "./dynamic/Heading";
import { MdArrowOutward } from "react-icons/md";

const CaseStudies = () => {
  return (
    <div className="space-y-8 mb-8">
      <Heading
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="md:bg-dark rounded-3xl md:p-6 text-white select-none">
        <div
          className={`flex flex-col md:flex-row overflow-hidden md:gap-2 gap-4
         md:hover:cursor-auto transition-transform delay-1000 ease-in-out`}
        >
          <div className="p-4 min-w-72 sm:min-w-96 md:min-w-0 rounded-3xl md:rounded-none bg-dark md:bg-none">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>

            <div className="flex text-green mt-4">
              <div className="flex gap-2 items-center hover:cursor-pointer">
                <MdArrowOutward className="text-3xl" />
                <span>Learn more</span>
              </div>
            </div>
          </div>
          <div
            className="border-x border-white p-4 min-w-72 sm:min-w-96 md:min-w-0 rounded-3xl bg-dark md:bg-none md:rounded-none"
          >
            <p>
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>

            <div className="flex text-green mt-4">
              <div className="flex gap-2 items-center hover:cursor-pointer">
                <MdArrowOutward className="text-3xl" />
                <span>Learn more</span>
              </div>
            </div>
          </div>
          <div
            className="p-4 min-w-72 sm:min-w-96  md:min-w-0 rounded-3xl bg-dark md:bg-none md:rounded-none"
          >
            <p>
              For a national retail chain, we created a social media
              marketing campaign that increased followers by 25% and generated a
              20% increase in online sales.
            </p>

            <div className="flex text-green mt-4">
              <div className="flex gap-2 items-center hover:cursor-pointer">
                <MdArrowOutward className="text-3xl" />
                <span>Learn more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
