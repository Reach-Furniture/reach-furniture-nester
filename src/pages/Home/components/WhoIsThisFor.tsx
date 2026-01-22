const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-bef0fb">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          style={{ color: "#a61042" }}
        >
          Who is REACH Furniture Nester for?
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          REACH Furniture Nester is best suited for furniture and woodworking
          operations that cut panel-based parts and want to reduce material
          waste and CNC time.
        </p>

        <div className="max-w-5xl mx-auto space-y-10 text-gray-700 text-lg">

          {/* Panel Furniture */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Panel furniture manufacturers
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Medium and large factories producing modular furniture,
                wardrobes, kitchens, office furniture, and storage systems using
                plywood, MDF, and particle board sheets.
              </li>
              <li>
                Plants running high volumes of repeat and custom SKUs where small
                yield improvements create major savings on sheet materials.
              </li>
            </ul>
          </div>

          {/* Carpentry */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Custom carpentry and joinery shops
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Small and mid-sized workshops making bespoke wardrobes, kitchen
                cabinets, closets, and interiors using CNC routers.
              </li>
              <li>
                Joinery units nesting manually in CAD who need automation to cut
                programming time and reduce errors.
              </li>
            </ul>
          </div>

          {/* OEM */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              OEM suppliers and component makers
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Vendors supplying cut-to-size, edge-banded, and drilled panels to
                large furniture brands and interior contractors.
              </li>
              <li>
                Component suppliers for knock-down furniture, doors, drawers,
                and fixtures needing precise, repeatable nesting.
              </li>
            </ul>
          </div>

          {/* Fit-out */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Interior fit-out and turnkey contractors
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Companies executing turnkey interior projects for offices,
                retail, hospitality, and residential spaces.
              </li>
              <li>
                Contractors handling multiple sites who must optimize board
                usage across projects and timelines.
              </li>
            </ul>
          </div>

          {/* CNC */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              CNC machining centres and job shops
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Independent CNC routing centres offering cutting services for
                furniture manufacturers and carpenters.
              </li>
              <li>
                Service bureaus aiming to maximize machine utilization while
                reducing offcut waste and manual nesting work.
              </li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Training institutes and technical centres
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Furniture design, woodworking, and interior institutes teaching
                CNC nesting and production workflows.
              </li>
              <li>
                Government or industry-backed common facility centres supporting
                furniture MSMEs with shared CNC and nesting facilities.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
