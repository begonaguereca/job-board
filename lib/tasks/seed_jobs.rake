task seed_jobs: :environment do

    Job.create(
        company: 'Amazon',
        position: 'Staff Software Engineer',
        description: 'Be the lead technical resource'
    )
  
    Job.create(
        company: 'Microsoft',
        position: 'Engineer',
        description: 'Write code'
    )
  
    puts 'complete'
  end