10.times do |proposal|
Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: 'http://amergheith.me',
    tools: "Ruby on Rails, Angular 2, and Postgresql",
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'amerghth@gmail.com',
)

end
