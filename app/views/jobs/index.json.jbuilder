json.array!(@jobs) do |job|
  json.extract! job, :id, :name
end
