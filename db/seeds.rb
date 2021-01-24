9.times do |i|
    Job.create(
        company: "Amazon",
        position: "Staff Software Engineer #{i + 1}",
        description: "Be the lead technical resource"
    )
  end