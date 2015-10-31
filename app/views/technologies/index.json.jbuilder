json.array!(@technologys) do |technology|
  json.extract! technology, :id, :name, :description
end
