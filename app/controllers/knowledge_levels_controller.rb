class KnowledgeLevelsController < ApplicationController
	  before_action :authenticate_user!
  before_action :set_knowledgeLevel, only: [:show, :edit, :update, :destroy]


  # GET /knowledgeLevels
  # GET /knowledgeLevels.json
  def index
      @knowledgeLevels = KnowledgeLevel.all
  end

  # GET /knowledgeLevels/1
  # GET /knowledgeLevels/1.json
  def show
  end

  # GET /knowledgeLevels/new
  def new
    @knowledgeLevel = KnowledgeLevel.new
  end

  # GET /knowledgeLevels/1/edit
  def edit
  end

  # POST /knowledgeLevels
  # POST /knowledgeLevels.json
  def create
    @knowledgeLevel = KnowledgeLevel.new(knowledgeLevel_params)


    respond_to do |format|
      if @knowledgeLevel.save
        format.html { redirect_to edit_knowledgeLevel_path(@knowledgeLevel), notice: 'KnowledgeLevel was successfully created.' }
        format.json { render :show, status: :created, location: @knowledgeLevel }
      else
        format.html { render :new }
        format.json { render json: @knowledgeLevel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /knowledgeLevels/1
  # PATCH/PUT /knowledgeLevels/1.json
  def update
    respond_to do |format|
      if @knowledgeLevel.update(knowledgeLevel_params)
        format.html { redirect_to edit_knowledgeLevel_path(@knowledgeLevel), notice: 'KnowledgeLevel was successfully updated.' }
        format.json { render :show, status: :ok, location: @knowledgeLevel }
      else
        format.html { render :edit }
        format.json { render json: @knowledgeLevel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /knowledgeLevels/1
  # DELETE /knowledgeLevels/1.json
  def destroy
    @knowledgeLevel.destroy
    respond_to do |format|
      format.html { redirect_to knowledgeLevels_url, notice: 'KnowledgeLevel was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_knowledgeLevel
      @knowledgeLevel = KnowledgeLevel.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def knowledgeLevel_params
      params[:knowledgeLevel].permit(:level, :description)
    end


end
