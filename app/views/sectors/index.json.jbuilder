json.array!(@sectors) do |sector|
  json.extract! sector, :id, :short_name, :name, :description
end
