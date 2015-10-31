json.array!(@roles) do |role|
  json.extract! role, :id, :name
end
