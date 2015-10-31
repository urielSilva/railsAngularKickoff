json.array!(@activityTypes) do |activityType|
  json.extract! activityType, :id, :name, :description
end
