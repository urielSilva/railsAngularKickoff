json.array!(@knowledgeLevels) do |knowledgeLevel|
  json.extract! knowledgeLevel, :id, :level, :description
end
