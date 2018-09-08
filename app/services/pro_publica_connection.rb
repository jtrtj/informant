class ProPublicaConnection
  def self.conn
    Faraday.new(:url => 'https://api.propublica.org') do |faraday|
      faraday.headers['X-API-Key'] = ENV['propublica_api_key']
      faraday.adapter  Faraday.default_adapter
    end
  end
end