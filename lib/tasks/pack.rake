task pack: :environment do
  raise "production env is required" unless Rails.env.production?
  Application::Operation::Pack.wtf?({})
end
