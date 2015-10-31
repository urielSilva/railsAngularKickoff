json.array!(@areas) do |area|
  json.extract! area, :id, :name, :sector
end
