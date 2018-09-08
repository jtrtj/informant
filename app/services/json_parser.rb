module JsonParser
  def json_parse_symbolize_names(raw_json)
    JSON.parse(raw_json, symbolize_names: true)
  end
end